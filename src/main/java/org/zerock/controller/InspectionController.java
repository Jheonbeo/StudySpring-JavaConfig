package org.zerock.controller;

import java.io.IOException;
import java.util.ArrayList;
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
import org.zerock.domain.InspectVO;
import org.zerock.service.InspectService;

@Controller	//스프링의 빈으로 인식토록
@RequestMapping("/inspection/*")	//item으로 시작하는 모든 처리는 이 클래스에서 
public class InspectionController {
	private Logger log = LogManager.getLogger(this.getClass());
	private InspectService service;
	
	CommonMethod cm = new CommonMethod();
	
	@GetMapping("/inspection")
	public void list(Model model) {
		log.info("/inspection/inspection");
        //model.addAttribute("jssLineList", itemService.getItemDataList(paramToMap("", "70", "", "", ""), 3));
	}

	@PostMapping("/getInspection")
	@ResponseBody
	public ArrayList<InspectVO> getItem(@RequestBody Map<String, Object> param) throws IOException {
		log.info("/inspection/getInspection");
		String action = (String) param.get("ACTION");
		String data = cm.transVOtoString(param);
		
		ArrayList<InspectVO> arrInspect = service.getInspection(data, action);
		
		return arrInspect;
	}
}





