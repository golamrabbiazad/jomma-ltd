package com.golamrabbiazad.jommaeserver.respository;

import com.golamrabbiazad.jommaeserver.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM PRODUCTS p WHERE p.ACTIVE_STATUS = 1")
    List<Products> findAllActiveProducts();

    @Query(nativeQuery = true, value = "SELECT CASE WHEN COUNT(*) > 0 THEN 'true' ELSE 'false' END FROM PRODUCTS p WHERE p.PRODUCT_CODE = :productCode")
    boolean existsByProductCode(@Param("productCode") String productCode);
}
