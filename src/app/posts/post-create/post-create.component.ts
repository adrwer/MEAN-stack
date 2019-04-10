import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';

@Component ({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  // enteredValue = '';
  // newPost = 'No Content';
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>();

  /* onAddPost(postInput: HTMLTextAreaElement) {
    this.newPost = postInput.value;
  } */
  onAddPost(form: NgForm) {
    // this.newPost = this.enteredValue;
    // const post: Post = {title: this.enteredTitle, content: this.enteredContent};
    if (form.invalid) {
      return;
    }
    const post: Post = {title: form.value.title, content: form.value.content};

    this.postCreated.emit(post);
  }
}
