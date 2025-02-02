package com.stayhub.repository;

import com.stayhub.entity.Owner;
import com.stayhub.entity.Pg;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PgRepository extends JpaRepository<Pg, Long> {
	List<Pg> findByOwner(Owner owner);
}
