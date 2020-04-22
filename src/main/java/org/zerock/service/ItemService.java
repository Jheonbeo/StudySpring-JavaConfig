package org.zerock.service;

import java.util.List;

import org.json.simple.JSONArray;
import org.zerock.domain.ItemVO;

public interface ItemService {
	
	public List<ItemVO> getList();
	
	public JSONArray getItemDataList(String array_data, int action);
}
