import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements OnInit {


  public frmPagamento: FormGroup;

  public listaEstados: string[] = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];


  constructor(private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.frmPagamento = this.formBuilder.group({
      cidade: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required)
    });
  }

  salvar() {
    if (this.frmPagamento.valid) {
      this.router.navigate(['/home']);
    }
  }

}
