package org.zerock.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
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
import org.zerock.domain.InspectVO;
import org.zerock.service.InspectService;
import org.zerock.service.ItemService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Controller	//스프링의 빈으로 인식토록
@Log4j
@RequestMapping("/inspection/*")	//item으로 시작하는 모든 처리는 이 클래스에서 
@AllArgsConstructor
public class InspectionController {
	private ItemService itemService;  
	private InspectService service;
	
	CommonMethod cm = new CommonMethod();
	
	@GetMapping("/inspection")
	public void list(Model model) {
		log.info("inspection");
		
        model.addAttribute("jssLineList", itemService.getItemDataList(paramToMap("", "70", "", "", ""), 3));
	}

	private String paramToMap(String cdItem, String seg_Asset, String supplier, String customer, String discon) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("CD_ITEM", cdItem);
		param.put("CD_TYPE", seg_Asset);
		param.put("CD_SUPPLIER", supplier);
		param.put("CD_CUSTOMER", customer);
		param.put("CDDISCON", discon);
		
		return cm.transVOtoString(param);
	}

	@PostMapping("/getInspection")
	@ResponseBody
	public ArrayList<InspectVO> getItem(@RequestBody Map<String, Object> param) throws IOException {
		String action = (String) param.get("ACTION");
		String data = cm.transVOtoString(param);
		
		ArrayList<InspectVO> arrInspect = service.getInspection(data, action);
		
		return arrInspect;
	}
}





