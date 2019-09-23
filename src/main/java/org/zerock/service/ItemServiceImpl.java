package org.zerock.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;
import org.zerock.domain.ItemVO;
import org.zerock.mapper.ItemMapper;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Log4j
@Service //비즈니스 영역을 담당하는 객체임을 표시
@AllArgsConstructor
public class ItemServiceImpl implements ItemService{
	//spring 4.3이상에서 단일 파라미터 받는 생성자의 경우 필요한 파라미터를 자동 주입
	//@AllArgsContstructor 이용
	//그게 아니면 Lombok을 활용한
	//@Setter(onMethod_ = @Autowired)
	private ItemMapper mapper;
	
	@Override
	public void register(ItemVO item) {
		log.info("register........." + item);
		
		mapper.insertSelectKey(item);
	}

	@Override
	public ItemVO get(String cd_item) {
		log.info("get.........." + cd_item);
		
		return mapper.read(cd_item);
	}

	@Override
	public boolean modify(ItemVO item) {
		log.info("modify....." + item);
		
		//If sql success, it returns 1. 
		return mapper.update(item) == 1;
	}

	@Override
	public boolean remove(String cd_item) {
		log.info("remove......" + cd_item);

		//If sql success, it returns 1. 
		return mapper.delete(cd_item) == 1;
	}

	@Override
	public List<ItemVO> getList() {
		// TODO Auto-generated method stub
		log.info("getList.......");
		
		return mapper.getList();
	}

	@Override
	public String getSupplierList(HashMap<String, Object> map) {
		// TODO Auto-generated method stub
		log.info("Service : getSupplierList");
		
		return mapper.getSupplierList(map);
	}
}
