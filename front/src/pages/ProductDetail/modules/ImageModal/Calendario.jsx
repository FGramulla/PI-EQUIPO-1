import React, { useState, useContext, useEffect} from 'react';
import { useParams } from "react-router";
import { DateForm, Label, Input, ButtonSearch} from './calendario.style';
import { obtenerFechaActual } from '../../../../utils/get-fecha-actual';
import { ContextGlobal } from '../../../../context/context';
import { productoById } from '../../../../services/product/productFirebase';


const Calendario = () => {

  const { id } = useParams();
  

    const fechaActual = obtenerFechaActual();
    const fechaMinimaEnd = new Date();
    fechaMinimaEnd.setDate(fechaMinimaEnd.getDate() + 2);
    const fechaMinimaEndFormato = fechaMinimaEnd.toISOString().split("T")[0];

    const [initDate, setInitDate] = useState(fechaActual);
    const [endDate, setEndDate] = useState("");
    const [endDateMin, setEndDateMin] = useState('');
    const [disponibilidad, setDisponibilidad] = useState('');
    const [product, setProduct] = useState(null);


    useEffect(() => {
      const getProducto = async () => {
        const product = await productoById(id);
        setProduct(product);
      };

      getProducto();
      window.scrollTo(0, 0);
    }, []);
    
    
    // console.log(product)

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
        console.log("desde: ", initDate);
        console.log("hasta: ", endDate);
      };

      // const calcularDisponibilidad = (fechaActual, initDate, endDate) => {
      //   return fechaActual >= product.disponibilidad.reserva.fechaInicio && fechaActual <= product.disponibilidad.reserva.fechaFin ? 'Disponible' : 'No Disponible';
      // }
      // console.log(calcularDisponibilidad)
  return (
    <form onSubmit={handleSubmit}>
      <div><p>Disponibilidad: {disponibilidad}</p></div>
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
          </DateForm>
        </div>
    </form>
  );
};

export default Calendario;