package com.stayhub.service;

import com.stayhub.entity.Pg;
import com.stayhub.dto.PgDto;
import java.util.List;

public interface PgService {
	Pg addPg(PgDto pgDto, String ownerEmail);
	List<Pg> getPgsByOwner(String ownerEmail);

}
