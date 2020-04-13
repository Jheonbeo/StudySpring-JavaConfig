package org.zerock.mapper;

import java.util.HashMap;

import org.zerock.domain.DashVO;

public interface DashMapper {
	public DashVO getInit(HashMap<String, Object> map);
}
