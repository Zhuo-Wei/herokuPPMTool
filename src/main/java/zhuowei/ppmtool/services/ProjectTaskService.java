package zhuowei.ppmtool.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import zhuowei.ppmtool.domain.Backlog;
import zhuowei.ppmtool.domain.Project;
import zhuowei.ppmtool.domain.ProjectTask;
import zhuowei.ppmtool.exception.ProjectNotFoundException;
import zhuowei.ppmtool.repositories.BacklogRepository;
import zhuowei.ppmtool.repositories.ProjectRepository;
import zhuowei.ppmtool.repositories.ProjectTaskRepository;

import java.security.Principal;

@Service
public class ProjectTaskService {


    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ProjectService projectService;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask, String username){

           //PTs to be added to a specific project, project != null, BL exists
        //ensure to find project
           Backlog backlog = projectService.findProjectByIdentifier(projectIdentifier, username).getBacklog();//backlogRepository.findByProjectIdentifier(projectIdentifier);
           //set the bl to pt
           projectTask.setBacklog(backlog);
           //we want our project sequence to be like this: IDPRO-1  IDPRO-2  ...100 101
           Integer BacklogSequence = backlog.getPTSequence();
           // Update the BL SEQUENCE
           BacklogSequence++;

           backlog.setPTSequence(BacklogSequence);

           //Add Sequence to Project Task
           projectTask.setProjectSequence(backlog.getProjectIdentifier()+"-"+BacklogSequence);
           projectTask.setProjectIdentifier(projectIdentifier);

           //INITIAL priority when priority null

           //INITIAL status when status is null
           if(projectTask.getStatus()==""|| projectTask.getStatus()==null){
               projectTask.setStatus("TO_DO");
           }

           if(projectTask.getPriority() == null || projectTask.getPriority()== 0){
               projectTask.setPriority(3);
           }

           return projectTaskRepository.save(projectTask);


    }

    public Iterable<ProjectTask>findBacklogById(String id, String username){
        projectService.findProjectByIdentifier(id, username);

        return projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
    }

    public ProjectTask findPTByProjectSequence(String backlog_id, String pt_id, String username) {
        //make sure we are searching on an existing backlog
        projectService.findProjectByIdentifier(backlog_id, username);

        //make sure that our task exists
        ProjectTask projectTask = projectTaskRepository.findByProjectSequence(pt_id);
        if (projectTask == null) {
            throw new ProjectNotFoundException("Project task '" + pt_id + "' does not exist");
        }
        //make sure that the backlog/project id in the path corresponds to the right project
        if (!projectTask.getProjectIdentifier().equals(backlog_id)) {
            throw new ProjectNotFoundException("Project task '" + pt_id + "' does not exist in project: '"+backlog_id);
        }
        return projectTask;
    }

    public ProjectTask updatePTByProjectSequence(ProjectTask updatedTask, String backlog_id, String pt_id,
                                                String username) {
        //find existing project task & validation
        ProjectTask projectTask = findPTByProjectSequence(backlog_id, pt_id, username);
        //Update project task & replace it with updated task
        projectTask = updatedTask;
        //save update
        return projectTaskRepository.save(projectTask);
    }

    public void deletePTProjectSequence(String backlog_id, String pt_id, String username) {
        //find existing project task & validation
        ProjectTask projectTask = findPTByProjectSequence(backlog_id, pt_id, username);
        projectTaskRepository.delete(projectTask);
    }
}