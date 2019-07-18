package org.zerock.controller;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.zerock.domain.SampleDTO;
import org.zerock.domain.SampleDTOList;

import lombok.extern.log4j.Log4j;

@Controller
@RequestMapping("/sample/*")
@Log4j	//pom.xml lombok 의존성 주입시 runtime 옵션 넣지 말것! Test는 몰라도 Main에선 라이브러리를 인식못함.
public class SampleController {
	@RequestMapping(value="/basic", method = {RequestMethod.GET, RequestMethod.POST})
	public void basic() {
		log.info("basic get.................");
	}
	
	@GetMapping("/basicOnlyGet")
	public void basicGet2() {
		log.info("basic get only get.............");
	}

    @GetMapping("/ex01")
    public String ex01(SampleDTO dto) {
        log.info(" "+dto);
        return "ex01";
    }

    //@ReauestParam은 파라미터로 사용된 변수의 이름과 전달되는 파라미터의 이름이 다른 경우에 유용하게 사용됩니다.
    //지금은 동일하니 상관없다만 예시
    //경로/sample/ex02?name=AAA&age=10
    @GetMapping("/ex02")
    public String ex02(@RequestParam("name") String name,@RequestParam("age") int age) {
        System.out.println("name: "+ name);
        System.out.println("age: "+ age);
 
        return "ex02";
    }
    
    //경로/sample/ex02List?ids=111&ids=222&ids=333
    @GetMapping("/ex02List")
    public String ex02List(@RequestParam("ids") ArrayList<String> ids) {
        System.out.println("ids: "+ ids);
    
        return "ex02List";
    }
    
    //배열도 비슷함
    @GetMapping("/ex02Array")    
    public String ex02Array(@RequestParam("ids") String[]ids) {
    	System.out.println("array ids: "+ Arrays.toString(ids));
    	return "ex02Array";
    }
    
    //http://localhost:8080/sample/ex02Baen?list[0].name=aaa&list[2].name=bbb
    @GetMapping("/ex02Baen")
    public String ex02Baen(SampleDTOList list) {
        System.out.println("list dtos: "+ list);
        return "ex02Baen";    
    }
    
    //jsp파일 만든 맵핑
    //@ModelAttribute는 강제로 전달받은 파라미터를 Model에 담아서 전달하도록 할 때 필요한 어노테이션
    //http://localhost:8080/sample/ex04?name=aaa&age=11&page=9
    @GetMapping("/ex04")
    public String ex04(SampleDTO dto,@ModelAttribute("page") int page) {
        System.out.println("dto: "+dto);
        System.out.println("page: "+page);
        return "/sample/ex04";
    }
    
    /*
    Controller의 메서드가 사용할 수 있는 리턴 타입은 주로 다음과 같음.

    -String: jsp를 이용하는 경우에는 jsp파일의 경로와 파일이름을 나타내기 위해서 사용함.
    -void: 호출하는 URL과 동일한 이름의 jsp를 의미함.
    -VO,DTO 타입: 주로 JSON 타입의 데이터를 만들어서 반환하는 용도로 사용함.
    -ResponseEntity 타입: response 할 때 Http헤더 정보와 내용을 가공하는 용도로 사용함.
    -Model, ModelAndView: Model로 데이터를 반환하거나 화면까지 같이 지정하는 경우에 사용함.(최근에는 많이 사용하지 않음)
    -HttpHeaders: 응답에 내용 없이 Http헤더 메시지만 전달하는 용도로 사용함.
    */
    
    //void타입. 호출하는 URL과 동일.
    //http://localhost:8080/sample/ex05
    @GetMapping("/ex05")
    public void ex05() {
        System.out.println("ex05");
    }
    
    @GetMapping("/ex06")
    public @ResponseBody SampleDTO ex06() {
        System.out.println("ex06...............");
        SampleDTO dto = new SampleDTO();
        dto.setAge(10);
        dto.setName("김선영");
        
        return dto;
    }
    
    @GetMapping("/ex07")
    public ResponseEntity<String> ex07(){
        log.info("ex07...............");
        //{"name" : "홍길동"}
        String msg = "{\"name\": \"홍길동\"}";
        
        HttpHeaders header = new HttpHeaders();
        header.add("Content-Type", "application/json;charset=UTF-8");
        
        return new ResponseEntity<>(msg, header, HttpStatus.OK);
    }
    
    //file upload
    @GetMapping("/exUpload")
    public void exUpload() {
    	log.info("/exUpload..........");
    }
    
    @PostMapping("/exUploadPost")
    public void exUploadPost(ArrayList<MultipartFile> files) {
    	files.forEach(file -> {
    		log.info("--------------------------------------");
    		log.info("name:" + file.getOriginalFilename());
    		log.info("size:" + file.getSize());
    	});
    }
}
