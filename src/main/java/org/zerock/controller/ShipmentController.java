package org.zerock.controller;

import java.io.IOException;
import java.util.Map;

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

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Controller	//스프링의 빈으로 인식토록
@Log4j
@RequestMapping("/ship/*")
@AllArgsConstructor
public class ShipmentController {
	private ShipService service;  
	CommonMethod cm = new CommonMethod();

	@GetMapping("/identification")
	public void list(Model model) {
		log.info("identification");
	}
	
	@PostMapping("/getIdenData")
	@ResponseBody
	public Object getIdenData(@RequestBody Map<String, Object> param) {
		String data = cm.transVOtoString(param);
		
		IdenVO idenInfo = service.getIdenInfo(data, "IDEN_INFO");
	    
		return idenInfo;
	}

	@SuppressWarnings("unchecked")
	@PostMapping("/setIdenData")
	@ResponseBody
	public Object setIdenData(@RequestBody Map<String, Object> param) throws IOException {
		Map<String, Object> temp = (Map<String, Object>) param.get("DATA");
		String data = cm.transVOtoString(temp);
		
		IdenVO idenInfo = service.setIdenInfo(data, "REG_IDEN");
		
		return idenInfo;
	}
}
