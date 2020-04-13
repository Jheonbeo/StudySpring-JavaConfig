package org.zerock.service;

import java.util.ArrayList;

import org.zerock.domain.DashVO;

public interface DashService {
	public DashVO getTotalProd(String array_data, String action);
	public ArrayList<DashVO> getLineUPH(String array_data, String action);
}
