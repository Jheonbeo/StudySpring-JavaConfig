package org.zerock.service;

import java.util.ArrayList;

import org.zerock.domain.InspectVO;

public interface InspectService {
	public ArrayList<InspectVO> getInspection(String array_data, String action);
}
