package com.klef.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.springboot.model.Admin;
import com.klef.springboot.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService
{
    @Autowired
    private AdminRepository adminRepository;

   

    @Override  
    public Admin checkAdminLogin(String uname, String pwd) {
      
      return adminRepository.checkAdminLogin(uname, pwd);
    }
}