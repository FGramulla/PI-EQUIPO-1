package com.backend.alquicancha.controller;

import com.backend.alquicancha.dto.ProductoDto;
import com.backend.alquicancha.entity.Imagen;
import com.backend.alquicancha.entity.Producto;
import com.backend.alquicancha.exceptions.BadRequestException;
import com.backend.alquicancha.exceptions.ResourceNotFoundException;
import com.backend.alquicancha.service.IImagenService;
import com.backend.alquicancha.service.IProductoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/products")
@CrossOrigin

public class ProductoController {

    IProductoService productoService;
    IImagenService imagenService;


    @Autowired
    public ProductoController(IProductoService productoService, IImagenService imagenService) {
        this.productoService = productoService;
        this.imagenService = imagenService;

    }

    // LIST
    @Operation(summary = "Listado de todos los productos")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Listado correcto",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProductoDto.class))}),
            @ApiResponse(responseCode = "404", description = "Productos no encontrados",
                    content = @Content),
            @ApiResponse(responseCode = "500", description = "Unexpected server error",
                    content = @Content)
    })
    @GetMapping()
    public List<ProductoDto> listarProductos() {
        return productoService.listarProductos();
    }

    // READ
    @Operation(summary = "Busqueda de un producto por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Producto encontrado correctamente",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProductoDto.class))}),
            @ApiResponse(responseCode = "400", description = "Id invalido",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Producto no encontrado",
                    content = @Content),
            @ApiResponse(responseCode = "500", description = "Unexpected server error",
                    content = @Content)
    })
    @GetMapping("/{id}")
    public ResponseEntity<ProductoDto> buscarProductoPorId(@PathVariable Long id) {
        return new ResponseEntity<>(productoService.buscarProducto(id), null, HttpStatus.OK);
    }

    // DELETE
    @Operation(summary = "Eliminación de un producto por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Producto eliminado correctamente",
            content = {@Content(mediaType = "application/json",
                schema = @Schema(implementation = ProductoDto.class))}),
            @ApiResponse(responseCode = "400", description = "Id invalido",
                content = @Content),
            @ApiResponse(responseCode = "500", description = "Unexpected server error",
                content = @Content)
    })
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarProductoPorId(@PathVariable Long id) throws ResourceNotFoundException {
        productoService.eliminarProducto(id);
        return ResponseEntity.ok("Producto eliminado");
    }

    // CREATE
    @Operation(summary = "Creación de un producto")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Producto creado correctamente",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProductoDto.class))}),
            @ApiResponse(responseCode = "400", description = "Id invalido",
                    content = @Content),
            @ApiResponse(responseCode = "500", description = "Unexpected server error",
                    content = @Content)
    })
    @PostMapping("/registrar")
    public ResponseEntity<ProductoDto> registrarProducto(@Valid @RequestBody ProductoDto productoDto) throws BadRequestException {
        return new ResponseEntity<>(productoService.guardarProducto(productoDto), null, HttpStatus.CREATED);
    }


    // UPDATE
    @Operation(summary = "Modificación de un producto por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Producto modificado correctamente",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProductoDto.class))}),
            @ApiResponse(responseCode = "400", description = "Id invalido",
                    content = @Content),
            @ApiResponse(responseCode = "500", description = "Unexpected server error",
                    content = @Content)
    })
    @PutMapping("/actualizar/{id}")
    public ResponseEntity<ProductoDto> actualizarProducto(@Valid @RequestBody Producto producto, @PathVariable long id) throws ResourceNotFoundException {
        return new ResponseEntity<>(productoService.actualizarProducto(producto, id), null, HttpStatus.OK);
    }

    // CATEGORIAS

    @Operation(summary = "Agregar una categoria a un producto")
    @PostMapping("/{id}/categorias/{categoria}")
    public ResponseEntity<Object> agregarCategoria(@PathVariable Long id, @PathVariable String categoria) throws ResourceNotFoundException {
        productoService.agregarCategoria(id, categoria);
        return ResponseEntity.ok("Categoria agregada");
    }

    @Operation(summary = "Eliminar una categoria de un producto")
    @DeleteMapping("/{id}/categorias/{categoria}")
    public ResponseEntity<Object> eliminarCategoria(@PathVariable Long id, @PathVariable String categoria) throws ResourceNotFoundException {
        productoService.eliminarCategoria(id, categoria);
        return ResponseEntity.ok("Categoria eliminada");
    }


    // IMAGENES

    @Operation(summary = "Cargar una imagen a un producto")
    @PostMapping("/products/{productId}/upload")
    @ApiResponse(responseCode = "200", description = "Photo uploaded successfully")
    public ResponseEntity<Object> uploadProductImage(@PathVariable Long productId, @RequestParam("photo") MultipartFile photo) throws IOException {
        System.out.printf(productId.toString());
        productoService.uploadProductImage(productId, photo);

        return ResponseEntity.ok("Photo uploaded successfully");
    }

    @Operation(summary = "Get all photos from a product")
    @GetMapping("/products/{productId}/photos")
    public ResponseEntity<Object> getPhotos(@PathVariable Long productId){
        Set<Imagen> photos = productoService.getPhotos(productId);
        return ResponseEntity.ok(photos);
    }

    @Operation(summary = "Get the number of photos from a product")
    @GetMapping("/products/{productId}/photos/count")
    public ResponseEntity<Object> getPhotosCount(@PathVariable Long productId){
        int photosCount = productoService.getPhotosCount(productId);
        return ResponseEntity.ok(photosCount);
    }

    @Operation(summary = "Delete a photo from a product")
    @DeleteMapping("/products/{productId}/photos/{photoId}")
    public ResponseEntity<Object> deletePhoto(@PathVariable Long productId, @PathVariable Long photoId){
        productoService.deletePhoto(productId, photoId);
        return ResponseEntity.ok("Photo deleted");
    }

    @Operation(summary = "Edit photo from a product")
    @PutMapping("/products/{productId}/photos/{photoId}")
    public ResponseEntity<Object> editPhoto(@PathVariable Long productId, @PathVariable Long photoId, @RequestBody Imagen imagen){
        imagenService.editarImagen(productId, photoId, imagen);
        return ResponseEntity.ok("Photo edited");
    }

}
