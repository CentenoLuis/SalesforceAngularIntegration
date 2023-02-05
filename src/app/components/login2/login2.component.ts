import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { SalesforceOAuthService } from 'src/app/services/salesforce-oauth.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
})
export class Login2Component {
  formulario: FormGroup = new FormGroup({
    username: new FormControl('Wunsch', [Validators.required]),
    password: new FormControl('vbm2otNob_UV224', [Validators.required]),
    orgType: new FormControl('Production', [Validators.required]),
  });
  response$?: Observable<Object>;

  constructor(private auth: SalesforceOAuthService) {}

  login() {
    const usuario: Usuario = {
      username: this.formulario.value.username,
      password: this.formulario.value.password,
      orgType: this.formulario.value.orgType,
    };

    /*  this.auth.getTokenService().subscribe((resp) => {
      console.log('Response: ', resp);
    }); */

    this.auth.getUserSession(usuario).subscribe((resp) => {
      console.log('*** Respuesta from NodeJs: ', resp);
    });

    /*  this.auth.iniciarSesion(usuario).subscribe((usuario: Usuario) => {
      this.store.dispatch(loadSesion({ usuarioActivo: usuario }));
      this.store.dispatch(loadUsuario({ usuario: usuario }));
      this.router.navigate(['inicio']);
    }); */
  }
}
