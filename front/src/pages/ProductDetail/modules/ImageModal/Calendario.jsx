import React, { useState } from 'react';
import { DateForm, Label, Input, ButtonSearch} from './calendario.style';
import { obtenerFechaActual } from '../../../../utils/get-fecha-actual';


const Calendario = ({ onFechaSeleccionada }) => {
    const fechaActual = obtenerFechaActual();
    const fechaMinimaEnd = new Date();
    fechaMinimaEnd.setDate(fechaMinimaEnd.getDate() + 2);
    const fechaMinimaEndFormato = fechaMinimaEnd.toISOString().split("T")[0];

    const [initDate, setInitDate] = useState(fechaActual);
    const [endDate, setEndDate] = useState("");
    const [endDateMin, setEndDateMin] = useState('');

    const handleInitChangeFecha = (e) => {
        const selectedDate = e.target.value;
        setInitDate(selectedDate);
    
        const fechaSeleccionada = new Date(selectedDate);
        fechaSeleccionada.setDate(fechaSeleccionada.getDate() + 2);
        const nuevaFechaEnd = fechaSeleccionada.toISOString().split("T")[0];
        setEndDate(nuevaFechaEnd);
        setEndDateMin(nuevaFechaEnd);
      };

      const handleEndChangeFecha = (e) => {
        setEndDate(e.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        console.log("desde: ", initDate);
        console.log("hasta: ", endDate);
      };

  // Lógica para manejar la selección de fechas

  const handleFechaSeleccionada = (fecha) => {
    // Lógica para determinar si es la fecha de entrada o salida
    // y llamar a la función de devolución de llamada correspondiente
    if (!fechaEntrada) {
      setFechaEntrada(fecha);
    } else {
      setFechaSalida(fecha);
      onFechaSeleccionada({ fechaEntrada, fechaSalida });
    }
  };

  // Resto de la lógica del calendario

  return (
    <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: 5 }}>
          <DateForm>
            <Label htmlFor="start">Desde: </Label>
            <Input
              type="date"
              id="start"
              value={initDate}
              onChange={handleInitChangeFecha}
              min={fechaActual}
            />
          </DateForm>
          <DateForm>
            <Label htmlFor="end">Hasta:</Label>
            <Input
              type="date"
              id="end"
              value={endDate}
              onChange={handleEndChangeFecha}
              min={endDateMin}
            />
          <ButtonSearch type="submit">
            <p>🔍</p>
          </ButtonSearch>
          </DateForm>
        </div>
    </form>
  );
};

export default Calendario;