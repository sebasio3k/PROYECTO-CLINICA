-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-05-2019 a las 23:19:45
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clinica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `idcita` bigint(250) NOT NULL,
  `idpaciente` bigint(250) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `iddoctor` bigint(250) NOT NULL,
  `nconsultorio` varchar(250) NOT NULL,
  `precio` decimal(65,2) NOT NULL,
  `estatus` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `iddepartamento` bigint(250) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `ubicacion` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctores`
--

CREATE TABLE `doctores` (
  `iddoctores` bigint(250) NOT NULL,
  `Nombre` text NOT NULL,
  `apaterno` text NOT NULL,
  `amaterno` text NOT NULL,
  `genero` text NOT NULL,
  `cedula` varchar(150) NOT NULL,
  `fracc` varchar(150) NOT NULL,
  `num` varchar(100) NOT NULL,
  `calle` varchar(100) NOT NULL,
  `edad` int(100) NOT NULL,
  `telefono` bigint(30) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `especialidad` varchar(250) NOT NULL,
  `nconsultorio` varchar(30) NOT NULL,
  `sueldo` decimal(65,2) NOT NULL,
  `iddepartamento` bigint(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `idpaciente` bigint(250) NOT NULL,
  `idcita` bigint(250) NOT NULL,
  `descripcioncita` varchar(250) NOT NULL,
  `observaciones` varchar(250) NOT NULL,
  `iddoctor` bigint(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horarios`
--

CREATE TABLE `horarios` (
  `idhorario` bigint(250) NOT NULL,
  `iddoctor` bigint(250) NOT NULL,
  `nconsultorio` bigint(250) NOT NULL,
  `hora` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `idpaciente` bigint(250) NOT NULL,
  `nombre` text NOT NULL,
  `apaterno` text NOT NULL,
  `amaterno` text NOT NULL,
  `genero` text NOT NULL,
  `fracc` varchar(150) NOT NULL,
  `num` varchar(150) NOT NULL,
  `calle` varchar(150) NOT NULL,
  `edad` int(3) NOT NULL,
  `telefono` bigint(30) NOT NULL,
  `correo` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal`
--

CREATE TABLE `personal` (
  `idpersonal` bigint(250) NOT NULL,
  `idtipo` bigint(250) NOT NULL,
  `nombre` text NOT NULL,
  `apaterno` text NOT NULL,
  `amaterno` text NOT NULL,
  `genero` text NOT NULL,
  `fracc` varchar(150) NOT NULL,
  `Num` varchar(150) NOT NULL,
  `calle` varchar(150) NOT NULL,
  `edad` int(100) NOT NULL,
  `telefono` bigint(30) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `cedula` varchar(100) NOT NULL,
  `iddepartamento` bigint(250) NOT NULL,
  `sueldo` decimal(65,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `promociones`
--

CREATE TABLE `promociones` (
  `idpromocion` bigint(250) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `porcentajerebaja` decimal(65,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipopersonal`
--

CREATE TABLE `tipopersonal` (
  `idtipo` bigint(250) NOT NULL,
  `nombretipo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tratamientos`
--

CREATE TABLE `tratamientos` (
  `idtratamiento` bigint(250) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `precio` decimal(65,3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tratamientos_pacientes`
--

CREATE TABLE `tratamientos_pacientes` (
  `idtratamiento` bigint(250) NOT NULL,
  `idpaciente` bigint(250) NOT NULL,
  `ncitas` mediumint(100) NOT NULL,
  `iddoctor` bigint(250) NOT NULL,
  `modalidadpago` text NOT NULL,
  `pagos` decimal(65,2) NOT NULL,
  `idpromocion` bigint(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`idcita`),
  ADD KEY `idpaciente` (`idpaciente`),
  ADD KEY `iddoctor` (`iddoctor`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`iddepartamento`);

--
-- Indices de la tabla `doctores`
--
ALTER TABLE `doctores`
  ADD PRIMARY KEY (`iddoctores`),
  ADD KEY `iddepartamento` (`iddepartamento`);

--
-- Indices de la tabla `historial`
--
ALTER TABLE `historial`
  ADD KEY `idpaciente` (`idpaciente`,`idcita`),
  ADD KEY `iddoctor` (`iddoctor`),
  ADD KEY `idcita` (`idcita`);

--
-- Indices de la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`idhorario`),
  ADD KEY `iddoctor` (`iddoctor`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`idpaciente`);

--
-- Indices de la tabla `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`idpersonal`),
  ADD KEY `idtipo` (`idtipo`,`iddepartamento`),
  ADD KEY `iddepartamento` (`iddepartamento`);

--
-- Indices de la tabla `promociones`
--
ALTER TABLE `promociones`
  ADD PRIMARY KEY (`idpromocion`);

--
-- Indices de la tabla `tipopersonal`
--
ALTER TABLE `tipopersonal`
  ADD PRIMARY KEY (`idtipo`);

--
-- Indices de la tabla `tratamientos`
--
ALTER TABLE `tratamientos`
  ADD PRIMARY KEY (`idtratamiento`);

--
-- Indices de la tabla `tratamientos_pacientes`
--
ALTER TABLE `tratamientos_pacientes`
  ADD KEY `idpaciente` (`idpaciente`,`iddoctor`),
  ADD KEY `iddoctor` (`iddoctor`),
  ADD KEY `idtratamiento` (`idtratamiento`),
  ADD KEY `idtratamiento_2` (`idtratamiento`),
  ADD KEY `idpromocion` (`idpromocion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `idcita` bigint(250) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `iddepartamento` bigint(250) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `doctores`
--
ALTER TABLE `doctores`
  MODIFY `iddoctores` bigint(250) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `horarios`
--
ALTER TABLE `horarios`
  MODIFY `idhorario` bigint(250) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `idpaciente` bigint(250) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personal`
--
ALTER TABLE `personal`
  MODIFY `idpersonal` bigint(250) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `promociones`
--
ALTER TABLE `promociones`
  MODIFY `idpromocion` bigint(250) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipopersonal`
--
ALTER TABLE `tipopersonal`
  MODIFY `idtipo` bigint(250) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tratamientos`
--
ALTER TABLE `tratamientos`
  MODIFY `idtratamiento` bigint(250) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `citas_ibfk_1` FOREIGN KEY (`idpaciente`) REFERENCES `pacientes` (`idpaciente`),
  ADD CONSTRAINT `citas_ibfk_2` FOREIGN KEY (`iddoctor`) REFERENCES `doctores` (`iddoctores`);

--
-- Filtros para la tabla `doctores`
--
ALTER TABLE `doctores`
  ADD CONSTRAINT `doctores_ibfk_1` FOREIGN KEY (`iddepartamento`) REFERENCES `departamentos` (`iddepartamento`);

--
-- Filtros para la tabla `historial`
--
ALTER TABLE `historial`
  ADD CONSTRAINT `historial_ibfk_1` FOREIGN KEY (`idcita`) REFERENCES `citas` (`idcita`),
  ADD CONSTRAINT `historial_ibfk_2` FOREIGN KEY (`idpaciente`) REFERENCES `pacientes` (`idpaciente`),
  ADD CONSTRAINT `historial_ibfk_3` FOREIGN KEY (`iddoctor`) REFERENCES `doctores` (`iddoctores`);

--
-- Filtros para la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD CONSTRAINT `horarios_ibfk_1` FOREIGN KEY (`iddoctor`) REFERENCES `doctores` (`iddoctores`);

--
-- Filtros para la tabla `personal`
--
ALTER TABLE `personal`
  ADD CONSTRAINT `personal_ibfk_1` FOREIGN KEY (`idtipo`) REFERENCES `tipopersonal` (`idtipo`),
  ADD CONSTRAINT `personal_ibfk_2` FOREIGN KEY (`iddepartamento`) REFERENCES `departamentos` (`iddepartamento`);

--
-- Filtros para la tabla `tratamientos_pacientes`
--
ALTER TABLE `tratamientos_pacientes`
  ADD CONSTRAINT `tratamientos_pacientes_ibfk_1` FOREIGN KEY (`iddoctor`) REFERENCES `doctores` (`iddoctores`),
  ADD CONSTRAINT `tratamientos_pacientes_ibfk_2` FOREIGN KEY (`idpaciente`) REFERENCES `pacientes` (`idpaciente`),
  ADD CONSTRAINT `tratamientos_pacientes_ibfk_3` FOREIGN KEY (`idpromocion`) REFERENCES `promociones` (`idpromocion`),
  ADD CONSTRAINT `tratamientos_pacientes_ibfk_4` FOREIGN KEY (`idtratamiento`) REFERENCES `tratamientos` (`idtratamiento`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
