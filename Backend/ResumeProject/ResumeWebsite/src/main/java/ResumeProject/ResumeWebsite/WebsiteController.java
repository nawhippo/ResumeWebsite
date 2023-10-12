package ResumeProject.ResumeWebsite;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/api")
public class WebsiteController {
    @GetMapping("/about")
    public String getAbout(){
        return "This is my about page.";
    }
}
