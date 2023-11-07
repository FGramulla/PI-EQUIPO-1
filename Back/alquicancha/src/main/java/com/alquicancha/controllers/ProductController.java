package com.alquicancha.controllers;


import com.alquicancha.Service.IProductService;
import com.alquicancha.controllers.dto.ProductDTO;
import com.alquicancha.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Set;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private IProductService productService;

    @GetMapping("/products")
    public Set<ProductDTO> getProducts(){
        return productService.findAll();
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Object> getProductById(@PathVariable Long id) {
        ProductDTO product = productService.findById(id);

        if (product == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.ok(product);
    }


    @PostMapping("/products/register")
    public ResponseEntity<Object> register(@RequestParam String name, @RequestParam String description,
                                           @RequestParam LocalDate fromDate, @RequestParam LocalDate toDate){
        productService.register(name, description, fromDate, toDate);

        return ResponseEntity.ok("Product created");
    }

    @PutMapping("/products/update")
    public ResponseEntity<Object> update(@RequestBody Product product){
        productService.update(product);

        return ResponseEntity.ok("Product updated");
    }

    @DeleteMapping("/products/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id){
        productService.delete(id);

        return ResponseEntity.ok("Product deleted");
    }

}