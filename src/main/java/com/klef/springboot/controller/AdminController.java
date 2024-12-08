package com.klef.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.klef.springboot.model.Admin;
import com.klef.springboot.service.AdminService;

@Controller
@CrossOrigin(origins = "http://localhost:3000") // React frontend port

public class AdminController {

    @Autowired
    private AdminService adminservice;

    @GetMapping("/adminhome")
    public String home() {
        return "election";
    }

    @PostMapping("/adminlogin")
    @ResponseBody
    public String adminLogin(@RequestBody Admin a) {
        String uname = a.getUsername();
        String pwd = a.getPassword();
        System.out.println("Username: " + uname);
        System.out.println("Password: " + pwd);
        Admin ad = adminservice.checkAdminLogin(uname, pwd);
        if (ad != null) {
            return "Login Successful";
        } else {
            return "Login fail";
        }
    }
}
