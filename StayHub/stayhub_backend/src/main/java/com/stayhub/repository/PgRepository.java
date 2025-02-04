package com.stayhub.repository;

import com.stayhub.entity.Owner;
import com.stayhub.entity.Pg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PgRepository extends JpaRepository<Pg, Long> {
	List<Pg> findByOwner(Owner owner);
	
	@Query("SELECT p FROM Pg p WHERE " +
            "(:location IS NULL OR LOWER(p.location) LIKE LOWER(CONCAT('%', :location, '%'))) AND " +
            "(:minRent IS NULL OR p.rent >= :minRent) AND " +
            "(:maxRent IS NULL OR p.rent <= :maxRent)")
    List<Pg> searchPgListings(
            @Param("location") String location,
            @Param("minRent") Integer minRent,
            @Param("maxRent") Integer maxRent
    );
	
	Optional<Pg> findByOwnerEmailAndName(String email, String name);
	
}
