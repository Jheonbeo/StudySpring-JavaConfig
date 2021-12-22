package org.zerock.service;

import java.util.ArrayList;

import org.zerock.domain.WarehouseVO;

public interface WarehouseService {
	public ArrayList<WarehouseVO> getWarehouseInfo(String array_data, String action);
}
