import * as api from './iccApi'

class IccApi extends Polymer.mixinBehaviors([], Polymer.Element) {
  static get template() {
    return Polymer.html`
        <style>
        </style>
`;
  }

  static get is() {
    return 'icc-api'
  }

  static get properties() {
    return {
      headers: {
        type: Object,
        value: {"Content-Type": "application/json"},
        notify: true
      },
      host: {
        type: String
      }
    }
  }

  static get observers() {
    return ["refresh(headers, headers.*, host)"]
  }

  constructor() {
    super()
  }

  ready() {
    super.ready()

    if (this.host != null) this.refresh()
  }

  refresh() {
    this.accesslogicc = new api.iccAccesslogApi(this.host, this.headers)
    this.authicc = new api.iccAuthApi(this.host, this.headers)
    this.beabicc = new api.iccBeabApi(this.host, this.headers)
    this.bechaptericc = new api.iccBechapterApi(this.host, this.headers)
    this.bedmgicc = new api.iccBedmgApi(this.host, this.headers)
    this.bedrugsicc = new api.iccBedrugsApi(this.host, this.headers)
    this.beefacticc = new api.iccBeefactApi(this.host, this.headers)
    this.beehboxicc = new api.iccBeehboxApi(this.host, this.headers)
    this.beeidicc = new api.iccBeeidApi(this.host, this.headers)
    this.beetarificc = new api.iccBeetarifApi(this.host, this.headers)
    this.begeninsicc = new api.iccBegeninsApi(this.host, this.headers)
    this.behubsicc = new api.iccBehubsApi(this.host, this.headers)
    this.bekmehricc = new api.iccBekmehrApi(this.host, this.headers)
    this.bemikronoicc = new api.iccBemikronoApi(this.host, this.headers)
    this.beprimotoicc = new api.iccBeprimotoApi(this.host, this.headers)
    this.berecipeicc = new api.iccBerecipeApi(this.host, this.headers)
    this.beresultexporticc = new api.iccBeresultexportApi(this.host, this.headers)
    this.beresultimporticc = new api.iccBeresultimportApi(this.host, this.headers)
    this.bestsicc = new api.iccBestsApi(this.host, this.headers)
    this.betherlinkicc = new api.iccBetherlinkApi(this.host, this.headers)
    this.bevitalinkicc = new api.iccBevitalinkApi(this.host, this.headers)
    this.codeicc = new api.iccCodeApi(this.host, this.headers)
    this.contacticc = new api.iccContactApi(this.host, this.headers)
    this.doctemplateicc = new api.iccDoctemplateApi(this.host, this.headers)
    this.documenticc = new api.iccDocumentApi(this.host, this.headers)
    this.entitytemplateicc = new api.iccEntitytemplateApi(this.host, this.headers)
    this.formicc = new api.iccFormApi(this.host, this.headers)
    this.genericicc = new api.iccGenericApi(this.host, this.headers)
    this.hcpartyicc = new api.iccHcpartyApi(this.host, this.headers)
    this.helementicc = new api.iccHelementApi(this.host, this.headers)
    this.icureicc = new api.iccIcureApi(this.host, this.headers)
    this.insuranceicc = new api.iccInsuranceApi(this.host, this.headers)
    this.invoiceicc = new api.iccInvoiceApi(this.host, this.headers)
    this.messageicc = new api.iccMessageApi(this.host, this.headers)
    this.patienticc = new api.iccPatientApi(this.host, this.headers)
    this.replicationicc = new api.iccReplicationApi(this.host, this.headers)
    this.tarificationicc = new api.iccTarificationApi(this.host, this.headers)
    this.usericc = new api.iccUserApi(this.host, this.headers)
    this.dispatchEvent(new CustomEvent('refresh', {detail: {}}))
  }

  accesslog() {
    return this.accesslogicc
  }

  auth() {
    return this.authicc
  }

  beab() {
    return this.beabicc
  }

  bechapter() {
    return this.bechaptericc
  }

  bedmg() {
    return this.bedmgicc
  }

  bedrugs() {
    return this.bedrugsicc
  }

  beefact() {
    return this.beefacticc
  }

  beehbox() {
    return this.beehboxicc
  }

  beeid() {
    return this.beeidicc
  }

  beetarif() {
    return this.beetarificc
  }

  begenins() {
    return this.begeninsicc
  }

  behubs() {
    return this.behubsicc
  }

  bekmehr() {
    return this.bekmehricc
  }

  bemikrono() {
    return this.bemikronoicc
  }

  beprimoto() {
    return this.beprimotoicc
  }

  berecipe() {
    return this.berecipeicc
  }

  beresultexport() {
    return this.beresultexporticc
  }

  beresultimport() {
    return this.beresultimporticc
  }

  bests() {
    return this.bestsicc
  }

  betherlink() {
    return this.betherlinkicc
  }

  bevitalink() {
    return this.bevitalinkicc
  }

  code() {
    return this.codeicc
  }

  contact() {
    return this.contacticc
  }

  doctemplate() {
    return this.doctemplateicc
  }

  document() {
    return this.documenticc
  }

  entitytemplate() {
    return this.entitytemplateicc
  }

  form() {
    return this.formicc
  }

  generic() {
    return this.genericicc
  }

  hcparty() {
    return this.hcpartyicc
  }

  helement() {
    return this.helementicc
  }

  icure() {
    return this.icureicc
  }

  insurance() {
    return this.insuranceicc
  }

  invoice() {
    return this.invoiceicc
  }

  message() {
    return this.messageicc
  }

  patient() {
    return this.patienticc
  }

  replication() {
    return this.replicationicc
  }

  tarification() {
    return this.tarificationicc
  }

  user() {
    return this.usericc
  }
}

customElements.define(IccApi.is, IccApi)