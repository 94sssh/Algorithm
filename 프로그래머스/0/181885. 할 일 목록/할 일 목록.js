function solution(todo_list, finished) {
    return todo_list.filter((_, idx)=>!finished[idx]);
}