package org.zerock.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Service;
import org.zerock.domain.WarehouseVO;
import org.zerock.mapper.WarehouseMapper;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WarehouseServiceImpl implements WarehouseService{
	private WarehouseMapper mapper;

	@SuppressWarnings("unchecked")
	@Override
	public ArrayList<WarehouseVO> getWarehouseInfo(String array_data, String action) {
		// TODO Auto-generated method stub
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("ARRAY_DATA", array_data);
		map.put("ACTION", action);
		mapper.getWarehouseInfo(map);

		ArrayList<WarehouseVO> dataList = new ArrayList<WarehouseVO>();
		for(WarehouseVO data : (ArrayList<WarehouseVO>)map.get("resultCursor")) {
			dataList.add(data);
		}
		return dataList;
	}
}
