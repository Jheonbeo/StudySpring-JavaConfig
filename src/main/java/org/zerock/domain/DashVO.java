package org.zerock.domain;

import lombok.Data;

@Data
public class DashVO{
	public int TOTAL_PROD;
	public int AVG_UPH;
	public int PLAN_PROD;
	public String PROD_LINE;
	public int PROD_UPH;
	
	private String ACTION;
}
