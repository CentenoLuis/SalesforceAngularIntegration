import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { SalesforceOAuthService } from 'src/app/services/salesforce-oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formulario: FormGroup = new FormGroup({
    usuario: new FormControl('Wunsch', [Validators.required]),
    contrasena: new FormControl('vbm2otNob_UV224', [Validators.required]),
    orgType: new FormControl('Production', [Validators.required]),
  });

  constructor(private auth: SalesforceOAuthService) {}

  login() {
    const usuario: Usuario = {
      username: this.formulario.value.usuario,
      password: this.formulario.value.contrasena,
      orgType: this.formulario.value.orgType,
    };

    this.auth.getTokenService().subscribe((resp) => {
      console.log('Response: ', resp);
    });

    /*  this.auth.iniciarSesion(usuario).subscribe((usuario: Usuario) => {
      this.store.dispatch(loadSesion({ usuarioActivo: usuario }));
      this.store.dispatch(loadUsuario({ usuario: usuario }));
      this.router.navigate(['inicio']);
    }); */
  }
}
