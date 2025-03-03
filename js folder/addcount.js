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


 

        


        
//     });

    
//     clearHistoryButton.addEventListener('click', function() {
        
//         activityLogContainer.innerHTML = '';
//     });

// function completeTaskBtn() {
//     const taskName = document.getElementById('taskName');
//     const btnInTask = document.getElementById('btnInTask');
//     const outPutBox = document.getElementById('output-box');
//     const completeTaskButton = document.getElementById('completeTaskBtn');

//     let currentTaskCount = parseInt(taskName.innerText) || 0;
//     let completedTaskCount = parseInt(btnInTask.innerText) || 0;

//     if (currentTaskCount > 0) {
//         taskName.innerText = currentTaskCount - 1;
//         btnInTask.innerText = completedTaskCount + 1;

//         const currentTime = new Date().toLocaleTimeString();

//         outPutBox.style.display = 'block';

//         outPutBox.insertAdjacentHTML(
//             'beforeend',
//             `<div>✅ 'Add Dark Mode' টাস্ক সম্পন্ন হয়েছে ${currentTime} সময়।</div>`
//         );

//         // ✅ সব টাস্ক শেষ হলে টেক্সট চেঞ্জ
//         if (currentTaskCount - 1 === 0) {
//             completeTaskButton.textContent = '✅ সব টাস্ক সম্পন্ন হয়েছে';
//             // completeTaskButton.disabled = true; // বাটন ডিজেবল করে দেওয়া
//         }

//     } else {
//         alert('🚫 কোনো টাস্ক বাকি নেই!');
//     }
// }

// // ✅ হিস্ট্রি ক্লিয়ার বাটন
// const clearHistoryButton = document.getElementById('toggleButton');
// const outputBox = document.getElementById('output-box');

// clearHistoryButton.addEventListener('click', () => {
//     outputBox.innerHTML = '<strong>কার্যক্রম লগ:</strong>';
//     outputBox.style.display = 'none';
//     clearHistoryButton.textContent = '🗑️ হিস্ট্রি ক্লিয়ার হয়েছে';
// });
