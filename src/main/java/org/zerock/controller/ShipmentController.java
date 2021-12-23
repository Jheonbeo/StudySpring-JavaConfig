package org.zerock.controller;

import java.io.IOException;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.zerock.common.CommonMethod;
import org.zerock.domain.IdenVO;
import org.zerock.service.ShipService;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Controller	//스프링의 빈으로 인식토록
@RequestMapping("/ship/*")
@RequiredArgsConstructor 
public class ShipmentController {
	private Logger log = LogManager.getLogger(this.getClass());
	@NonNull
	private ShipService service;  
	CommonMethod cm = new CommonMethod();

	@GetMapping("/identification")
	public void list(Model model) {
		log.info("/ship/identification");
	}
	
	@PostMapping("/getIdenData")
	@ResponseBody
	public Object getIdenData(@RequestBody Map<String, Object> param) {
		log.info("/ship/getIdenData");
		String data = cm.transVOtoString(param);
		
		IdenVO idenInfo = service.getIdenInfo(data, "IDEN_INFO");
	    
		return idenInfo;
	}

	@SuppressWarnings("unchecked")
	@PostMapping("/setIdenData")
	@ResponseBody
	public Object setIdenData(@RequestBody Map<String, Object> param) throws IOException {
		log.info("/ship/setIdenData");
		Map<String, Object> temp = (Map<String, Object>) param.get("DATA");
		String data = cm.transVOtoString(temp);
		
		IdenVO idenInfo = service.setIdenInfo(data, "REG_IDEN");
		
		return idenInfo;
	}
}
