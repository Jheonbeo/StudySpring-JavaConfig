package org.zerock.controller;

import java.util.ArrayList;
import java.util.Map;
import java.util.SortedMap;
import java.util.TreeMap;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.zerock.common.CommonMethod;
import org.zerock.domain.DashVO;
import org.zerock.service.DashService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Controller	//스프링의 빈으로 인식토록
@Log4j
@RequestMapping("/dashboard/*")	//item으로 시작하는 모든 처리는 이 클래스에서 
@AllArgsConstructor
public class DashBoardController {
	private DashService service;  
	CommonMethod cm = new CommonMethod();
	
	@GetMapping("/index")
	public void list(Model model) {
		log.info("index");
		
		model.addAttribute("prodNum", service.getTotalProd("", "TOTAL_PROD").getTOTAL_PROD());
		model.addAttribute("avgUph", service.getTotalProd("", "AVG_UPH").getAVG_UPH());
		model.addAttribute("planProd", service.getTotalProd("", "PLAN_PROD").getPLAN_PROD());
	}
	
	@PostMapping("/getLineUph")
	@ResponseBody
	public SortedMap<String, Object> getLineUph(@RequestBody Map<String, Object> param) {
		String data = cm.transVOtoString(param);
		ArrayList<DashVO> arrUPH = service.getLineUPH(data, "LINE_UPH");

		SortedMap<String, Object> elements = new TreeMap<String, Object>();
		for(DashVO uph : arrUPH){
			elements.put(uph.getPROD_LINE(), uph.getPROD_UPH());
		}
		
		return elements;
	}
	
}
