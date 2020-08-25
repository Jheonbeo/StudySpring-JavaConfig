package org.zerock.domain;

import lombok.Data;

@Data
public class InspectVO {
	private String CD_ITEM;
	private String NM_ITEM;
	private String CD_LINE;
	private String LOT;
	private String PROD_NUMB;
	private String ALL_COUNT;
	private String OK;
	private String NG;
	private String STARTTIME;
	private String ENDTIME;
}
