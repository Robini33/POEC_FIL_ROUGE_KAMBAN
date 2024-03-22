package com.ran.trello;

import com.ran.trello.Model.Entity.Project;
import com.ran.trello.Model.Entity.TaskCard;
import com.ran.trello.Model.Entity.UserP;
import com.ran.trello.Model.Entity.Wrapper;
import com.ran.trello.Model.Repository.ProjectRepository;
import com.ran.trello.Model.Repository.TaskCardRepository;
import com.ran.trello.Model.Repository.UserPRepository;
import com.ran.trello.Model.Repository.WrapperRepository;
import com.ran.trello.Service.UserPService;
import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class PoecFilRougeKambanApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(PoecFilRougeKambanApplication.class, args);
//		EntityManagerFactory emf = Persistence.createEntityManagerFactory("com.ran.trello.Model.Entity");
//		EntityManager em = emf.createEntityManager();
		UserP u1 = new UserP("JeanValJean@gmail.com", "Jean", "Jean", "ValJean");
		UserPRepository userRepository = context.getBean(UserPRepository.class);
		userRepository.save(u1);
		System.out.println("utilisateur crées");
		List<UserP> list = new ArrayList<>();
		list.add(u1);
		System.out.println("list user crées");
		List<Wrapper> wrappers = new ArrayList<>();
		Project p1 = new Project("Trello", "description de trello", "http://background", wrappers, list);
		ProjectRepository projectRepository = context.getBean(ProjectRepository.class);
		projectRepository.save(p1);
		System.out.println("project crées");
		List<TaskCard> listCard = new ArrayList<>();
		Wrapper w1 = new Wrapper("title", 0, listCard, p1.getId());
		WrapperRepository wrapperRepository = context.getBean(WrapperRepository.class);
		wrapperRepository.save(w1);
		System.out.println("wrapper crées");
		TaskCard t1 = new TaskCard("Task1", "task description", 0, w1.getId(), "String status");
		TaskCardRepository taskCardRepository = context.getBean(TaskCardRepository.class);
		taskCardRepository.save(t1);
		listCard.add(t1);
		w1.setCards(listCard);
		wrapperRepository.save(w1);
		wrappers = p1.getWrappers();
		wrappers.add(w1);
		p1.setWrappers(wrappers);
		projectRepository.save(p1);
		System.out.println("card crées");
	}
}
