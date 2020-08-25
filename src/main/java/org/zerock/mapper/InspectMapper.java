package org.zerock.mapper;

import java.util.HashMap;

import org.zerock.domain.InspectVO;

public interface InspectMapper {
	public InspectVO getInpection(HashMap<String, Object> map);
}
