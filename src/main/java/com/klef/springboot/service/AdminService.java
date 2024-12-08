package com.klef.springboot.service;

import com.klef.springboot.model.Admin;

public interface AdminService
{
	public Admin checkAdminLogin(String uname,String pwd);
	

}
