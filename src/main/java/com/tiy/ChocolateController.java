package com.tiy;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;

/**
 * Created by DTG2 on 09/22/16.
 */
@Controller
public class ChocolateController {


    @RequestMapping(path = "/coco", method = RequestMethod.GET)
    public String cocoLogin(HttpSession session, Model model) throws Exception {
        return "coco";
    }
}
