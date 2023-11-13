package com.backend.alquicancha.service.impl;

import com.backend.alquicancha.dto.ProductDto;
import com.backend.alquicancha.dto.ReservaDto;
import com.backend.alquicancha.dto.UsuarioDto;
import com.backend.alquicancha.entity.Reserva;
import com.backend.alquicancha.exceptions.BadRequestException;
import com.backend.alquicancha.exceptions.ResourceNotFoundException;
import com.backend.alquicancha.repository.IReservaRepository;
import com.backend.alquicancha.service.IReservaService;
import com.backend.alquicancha.utils.JsonPrinter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservaService implements IReservaService {
    private static final Logger LOGGER = LoggerFactory.getLogger(ReservaService.class);
    private final IReservaRepository turnoRepository;
    private final UsuarioService pacienteService;
    private final ProductService odontologoService;


    @Autowired
    public ReservaService(IReservaRepository turnoRepository, UsuarioService pacienteService, ProductService odontologoService) {
        this.turnoRepository = turnoRepository;
        this.pacienteService = pacienteService;
        this.odontologoService = odontologoService;

    }

    @Override
    public ReservaDto guardarTurno(Reserva reserva) throws BadRequestException {//para que funcione el BadRequest use los repository y no los service funciona pero es una mala practia me parece
        ReservaDto reservaDto = null;

        UsuarioDto paciente = pacienteService.buscarUsuarioPorId(reserva.getUsuario().getId());
        ProductDto odontologo = odontologoService.buscarProducto(reserva.getProducto().getId());

        if (paciente == null || odontologo == null) {
            if (paciente == null && odontologo == null) {
                LOGGER.error("El paciente y el odontologo no se encuentran en nuestra base de datos");
                throw new BadRequestException("El paciente y el odontologo no se encuentran en nuestra base de datos");
            } else if (paciente == null) {
                LOGGER.error("El paciente no se encuentra en nuestra base de datos");
                throw new BadRequestException("El paciente no se encuentra en nuestra base de datos");
            } else {
                LOGGER.error("El odontologo no se encuentra en nuestra base de datos");
                throw new BadRequestException("El odontologo no se encuentra en nuestra base de datos");
            }
        } else {
            reservaDto = ReservaDto.fromTurno(turnoRepository.save(reserva));
            LOGGER.info("Nuevo turno registrado con exito: {}", JsonPrinter.toString(reservaDto));
        }
        return reservaDto;
    }

    @Override
    public List<ReservaDto> listarTodos() {
        List<Reserva> reservaList = turnoRepository.findAll();
        List<ReservaDto> reservaDtoList = reservaList.stream().map(ReservaDto::fromTurno).toList();
        if (reservaList != null) {
            LOGGER.info("Listado de turnos: {}", JsonPrinter.toString(reservaDtoList));
        } else {
            LOGGER.warn("No hay turnos creados");
        }
        return reservaDtoList;
    }

    @Override
    public ReservaDto buscarTurnoPorId(Long id) throws ResourceNotFoundException {

        Reserva reservaBuscado = turnoRepository.findById(id).orElse(null);
        ReservaDto reservaDto = null;
        if (reservaBuscado != null) {
            reservaDto = ReservaDto.fromTurno(reservaBuscado);
            LOGGER.info("Turno encontrado: {}", JsonPrinter.toString(reservaDto));
        } else {
            LOGGER.info("EL turno no se encuentra registado en la base de datos.");
            throw new ResourceNotFoundException("EL turno no se encuentra registado en la base de datos.");
        }

        return reservaDto;
    }

    @Override
    public ReservaDto actualizarTurno(Reserva reserva) throws ResourceNotFoundException, BadRequestException {

        Reserva reservaActualizar = turnoRepository.findById(reserva.getId()).orElse(null);
        UsuarioDto paciente = pacienteService.buscarUsuarioPorId(reserva.getUsuario().getId());
        ProductDto odontologo = odontologoService.buscarProducto(reserva.getProducto().getId());

        ReservaDto reservaDtoActualiazado = null;

        if (reservaActualizar != null) {
            if (paciente == null || odontologo == null) {
                if (paciente == null && odontologo == null) {
                    LOGGER.error("El paciente y el odontologo no se encuentran en nuestra base de datos");
                    throw new BadRequestException("El paciente y el odontologo no se encuentran en nuestra base de datos");
                } else if (paciente == null) {
                    LOGGER.error("El paciente no se encuentra en nuestra base de datos");
                    throw new BadRequestException("El paciente no se encuentra en nuestra base de datos");
                } else {
                    LOGGER.error("El odontologo no se encuentra en nuestra base de datos");
                    throw new BadRequestException("El odontologo no se encuentra en nuestra base de datos");
                }
            } else {
                reservaActualizar = reserva;
                turnoRepository.save(reservaActualizar);
                reservaDtoActualiazado = ReservaDto.fromTurno(reserva);
                LOGGER.info("Turno actualizado con exito: {}", JsonPrinter.toString(reservaDtoActualiazado));
            }
        } else {
            LOGGER.info("No se pudo actualizar, el turno no se encuentra registrado.");
            throw new ResourceNotFoundException("No se pudo actualizar, el turno no se encuentra registrado.");
        }

        return reservaDtoActualiazado;
    }

    @Override
    public void eliminarTurno(Long id) throws ResourceNotFoundException {
        if (buscarTurnoPorId(id) != null) {
            turnoRepository.deleteById(id);
            LOGGER.warn("Se ha eliminado el paciente con id {}", id);
        } else {
            LOGGER.warn("No se ha encontrado el turno con id {}", id);
            throw new ResourceNotFoundException("No se ha encontrado el turno con id " + id);
        }
    }
}
