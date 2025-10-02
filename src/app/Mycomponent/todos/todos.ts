import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todos',
  imports: [FormsModule],
  templateUrl: './todos.html',
  styleUrls: ['./todos.css']
})
export class TodoComponent implements OnInit {
  posts: any[] = [];

  // নতুন todo form এর জন্য
  newPost: any = { title: '', body: '' };

  editPostId: number | null = null;
  editPostData: any = { title: '', body: '' };

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  // সব পোস্ট আনা
  getPosts() {
    this.todoService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  // নতুন পোস্ট যোগ করা
  addPost() {
    if (!this.newPost.title || !this.newPost.body) {
      alert("Title এবং Body অবশ্যই দিতে হবে!");
      return;
    }
    this.todoService.addPost(this.newPost).subscribe((data) => {
      this.posts.unshift(data);  // লিস্টে শুরুতে যোগ হবে
      this.newPost = { title: '', body: '' }; // ফর্ম রিসেট
    });
  }

  editPost(post: any) {
    this.editPostId = post.id;
    this.editPostData = { ...post };
  }

  saveEdit(id: number) {
    this.todoService.updatePost(id, this.editPostData).subscribe((data) => {
      const index = this.posts.findIndex((p) => p.id === id);
      if (index > -1) {
        this.posts[index] = data;
      }
      this.cancelEdit();
    });
  }

  cancelEdit() {
    this.editPostId = null;
    this.editPostData = { title: '', body: '' };
  }

  deletePost(id: number) {
    this.todoService.deletePost(id).subscribe(() => {
      this.posts = this.posts.filter((p) => p.id !== id);
    });
  }
}
