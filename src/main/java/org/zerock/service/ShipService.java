package org.zerock.service;

import org.json.simple.JSONObject;
import org.zerock.domain.IdenVO;

public interface ShipService {
	public IdenVO getIdenInfo(String array_data, String action);
	public IdenVO setIdenInfo(String array_data, String action);
}
