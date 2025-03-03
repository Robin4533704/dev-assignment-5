document.addEventListener('DOMContentLoaded', function() {
    const completedButtons = document.querySelectorAll('.btn-completed'); 
    const taskCountElement = document.getElementById('taskA'); 
    const navbarCountElement = document.getElementById('completedCount'); 
    const activityLogContainer = document.getElementById('activityLogContainer'); 
    const clearHistoryButton = document.getElementById('toggleButton'); 
    let completedTaskCount = 0; 
    const totalTasks = completedButtons.length;

    completedButtons.forEach(button => {
        button.addEventListener('click', function() {
            const taskName = button.parentElement.parentElement.querySelector('h1.text-2xl').textContent;
            const confirmCompletion = confirm(`Are you sure you want to mark "${taskName}" as completed?`);

            if (confirmCompletion) {
                button.disabled = true;

                let taskCount = parseInt(taskCountElement.textContent);
                taskCountElement.textContent = taskCount - 1;

                let navbarCount = parseInt(navbarCountElement.textContent.trim());
                navbarCountElement.textContent = navbarCount + 1;

                const now = new Date();
                const timeString = now.toLocaleTimeString();
                const logEntry = document.createElement('p');
                logEntry.textContent = `You have completed the task "${taskName}" at ${timeString}`;
                
                activityLogContainer.appendChild(logEntry);

                completedTaskCount++;
                if (completedTaskCount === totalTasks) {
                    alert('Congrats! You have completed all tasks! 🎉');
                }
            }
        });
    });

    clearHistoryButton.addEventListener('click', function() {
        activityLogContainer.innerHTML = '';
    });
});


 

        

