import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker, ImagePickerOptions} from "@ionic-native/image-picker/ngx";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.page.html',
  styleUrls: ['./profile-form.page.scss'],
})
export class ProfileFormPage implements OnInit {
  imagem = '';
  constructor(
    private camera: Camera,
    private imagePicker: ImagePicker
  ) { }

  ngOnInit() {
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 300,
      targetHeight: 400
    }

    this.camera.getPicture(options).then((imageData) => {
      if(imageData.indexOf('data:image/jpeg;base64') == -1) {
        imageData = 'data:image/jpeg;base64,' + imageData;
      }
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = imageData;
      this.imagem = base64Image;
     }, (err) => {
      // Handle error
     });
  }

  openPicture(){
    const options: ImagePickerOptions = {
      quality: 100,
      maximumImagesCount: 1,
      outputType: 1
    }
    
    this.imagePicker.getPictures(options).then((results) => {
      let imageData = results[0];
      if(imageData.indexOf('data:image/jpeg;base64') == -1) {
        imageData = 'data:image/jpeg;base64,' + imageData;
      }
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = imageData;
      this.imagem = base64Image;
    }, (err) => { });
  }
}
