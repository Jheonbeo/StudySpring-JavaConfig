package org.zerock.common;

import java.util.Iterator;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;

import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
public class CommonMethod {
	//기존 get 정보를 가지고오기 위한 parameter -> string convert
	public String transVOtoString(Map<String, Object> param) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String currentPrincipalName = authentication.getName();
		
		String data = "";
        Iterator<String> keys = param.keySet().iterator();

		while(keys.hasNext()){
            String key = keys.next();
            data += key + ":" + (param.get(key)==null? "" : param.get(key)) + ",";
        }
		//임시
		data += "CRT_USR:" + currentPrincipalName + ",";
		
		return data;
	}
}
