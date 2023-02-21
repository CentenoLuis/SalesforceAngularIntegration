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
  orgType?: number;

  orgTypeList = [
    { id: 0, value: 'https://login.salesforce.com' },
    { id: 1, value: 'https://test.salesforce.com' },
  ];

  formulario: FormGroup = new FormGroup({
    username: new FormControl('luis001155@resilient-unicorn-k0t2gm.com', [
      Validators.required,
    ]),
    password: new FormControl('mysecondITjob1080$', [Validators.required]),
    orgType2: new FormControl(null, [Validators.required]),
    secretId: new FormControl('', [Validators.required]),
  });
  response$?: Observable<Object>;

  constructor(private auth: SalesforceOAuthService) {}

  login() {
    const usuario: Usuario = {
      username: this.formulario.value.username,
      password: this.formulario.value.password,
      orgType: this.formulario.value.orgType2,
      secretId: this.formulario.value.secretId,
    };

    console.log('***Data from reactive Form: ', usuario);

    /*  this.auth.getTokenService().subscribe((resp) => {
      console.log('Response: ', resp);
    }); */

    this.auth.getUserSession(usuario);

    /*  this.auth.iniciarSesion(usuario).subscribe((usuario: Usuario) => {
      this.store.dispatch(loadSesion({ usuarioActivo: usuario }));
      this.store.dispatch(loadUsuario({ usuario: usuario }));
      this.router.navigate(['inicio']);
    }); */
  }
}
