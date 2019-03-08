import {ConfigObjectProto} from '../../../api';
import {intersectLabel} from '../group-update/labels/common-labels';
import {Collection} from './configs/collection.model';
import {CrawlEntity} from './configs/crawlentity.model';
import {Seed} from './configs/seed.model';
import {CrawlJob} from './configs/crawljob.model';
import {CrawlConfig} from './configs/crawlconfig.model';
import {CrawlScheduleConfig} from './configs/crawlscheduleconfig.model';
import {BrowserConfig} from './configs/browserconfig.model';
import {PolitenessConfig} from './configs/politenessconfig.model';
import {BrowserScript} from './configs/browserscript.model';
import {CrawlHostGroupConfig} from './configs/crawlhostgroupconfig.model';
import {RoleMapping} from './configs/rolemapping.model';
import {Kind} from './kind.model';
import {Meta} from './meta/meta.model';


export class ConfigObject {
  id?: string;
  apiVersion?: string;
  kind?: Kind;
  meta?: Meta;
  crawlEntity?: CrawlEntity;
  seed?: Seed;
  crawlJob?: CrawlJob;
  crawlConfig?: CrawlConfig;
  crawlScheduleConfig?: CrawlScheduleConfig;
  browserConfig?: BrowserConfig;
  politenessConfig?: PolitenessConfig;
  browserScript?: BrowserScript;
  crawlHostGroupConfig?: CrawlHostGroupConfig;
  roleMapping?: RoleMapping;
  collection?: Collection;

  constructor(configObject: ConfigObject | any = {}) {
    this.id = configObject.id || '';
    this.apiVersion = configObject.apiVersion || 'v1';
    this.kind = configObject.kind || Kind.UNDEFINED;
    this.meta = configObject.meta || new Meta();
    switch (configObject.kind) {
      case Kind.UNDEFINED:
        break;
      case Kind.CRAWLENTITY:
        this.crawlEntity = configObject.crawlEntity || new CrawlEntity();
        break;
      case Kind.SEED:
        this.seed = configObject.seed || new Seed();
        break;
      case Kind.CRAWLJOB:
        this.crawlJob = configObject.crawlJob || new CrawlJob();
        break;
      case Kind.CRAWLCONFIG:
        this.crawlConfig = configObject.crawlConfig || new CrawlConfig();
        break;
      case Kind.CRAWLSCHEDULECONFIG:
        this.crawlScheduleConfig = configObject.crawlScheduleConfig || new CrawlScheduleConfig();
        break;
      case Kind.BROWSERCONFIG:
        this.browserConfig = configObject.browserConfig || new BrowserConfig();
        break;
      case Kind.POLITENESSCONFIG:
        this.politenessConfig = configObject.politenessConfig || new PolitenessConfig();
        break;
      case Kind.BROWSERSCRIPT:
        this.browserScript = configObject.browserScript || new BrowserScript();
        break;
      case Kind.CRAWLHOSTGROUPCONFIG:
        this.crawlHostGroupConfig = configObject.crawlHostGroupConfig || new CrawlHostGroupConfig();
        break;
      case Kind.ROLEMAPPING:
        this.roleMapping = configObject.roleMapping || new RoleMapping();
        break;
      case Kind.COLLECTION:
        this.collection = configObject.collection || new Collection();
        break;
    }
  }

  static fromProto(proto: ConfigObjectProto): ConfigObject {
    const config = new ConfigObject();
    config.id = proto.getId();
    config.apiVersion = proto.getApiversion();
    config.kind = proto.getKind().valueOf();
    config.meta = Meta.fromProto(proto.getMeta());

    if (proto.getCrawlEntity()) {
      config.crawlEntity = CrawlEntity.fromProto(proto.getCrawlEntity());

    } else if (proto.getSeed()) {
      config.seed = Seed.fromProto(proto.getSeed());

    } else if (proto.getCrawlJob()) {
      config.crawlJob = CrawlJob.fromProto(proto.getCrawlJob());

    } else if (proto.getCrawlConfig()) {
      config.crawlConfig = CrawlConfig.fromProto(proto.getCrawlConfig());

    } else if (proto.getCrawlScheduleConfig()) {
      config.crawlScheduleConfig = CrawlScheduleConfig.fromProto(proto.getCrawlScheduleConfig());

    } else if (proto.getBrowserConfig()) {
      config.browserConfig = BrowserConfig.fromProto(proto.getBrowserConfig());

    } else if (proto.getPolitenessConfig()) {
      config.politenessConfig = PolitenessConfig.fromProto(proto.getPolitenessConfig());

    } else if (proto.getBrowserScript()) {
      config.browserScript = BrowserScript.fromProto(proto.getBrowserScript());

    } else if (proto.getCrawlHostGroupConfig()) {
      config.crawlHostGroupConfig = CrawlHostGroupConfig.fromProto(proto.getCrawlHostGroupConfig());

    } else if (proto.getRoleMapping()) {
      config.roleMapping = RoleMapping.fromProto(proto.getRoleMapping());
    } else if (proto.getCollection()) {
      config.collection = Collection.fromProto(proto.getCollection());
    }
    return config;
  }

  static mergeConfigs(configs: ConfigObject[]): ConfigObject {
    const configObject = new ConfigObject();
    configObject.meta = new Meta();

    // Please validators
    configObject.id = '123456';
    configObject.meta.name = 'update';

    configObject.meta.labelList = ConfigObject.mergeLabels(configs);

    const kind: Kind = configs[0].kind;
    configObject.kind = kind;

    switch (kind) {
      case Kind.UNDEFINED:
        break;
      case Kind.CRAWLENTITY:
        configObject.crawlEntity = CrawlEntity.mergeConfigs(configs);
        return configObject;
      case Kind.SEED:
        configObject.seed = Seed.mergeConfigs(configs);
        return configObject;
      case Kind.CRAWLJOB:
        configObject.crawlJob = CrawlJob.mergeConfigs(configs);
        return configObject;
      case Kind.CRAWLCONFIG:
        configObject.crawlConfig = CrawlConfig.mergeConfigs(configs);
        return configObject;
      case Kind.CRAWLSCHEDULECONFIG:
        configObject.crawlScheduleConfig = CrawlScheduleConfig.mergeConfigs(configs);
        return configObject;
      case Kind.BROWSERCONFIG:
        configObject.browserConfig = BrowserConfig.mergeConfigs(configs);
        return configObject;
      case Kind.POLITENESSCONFIG:
        configObject.politenessConfig = PolitenessConfig.mergeConfigs(configs);
        return configObject;
      case Kind.BROWSERSCRIPT:
        configObject.browserScript = BrowserScript.mergeConfigs(configs);
        return configObject;
      case Kind.CRAWLHOSTGROUPCONFIG:
        configObject.crawlHostGroupConfig = CrawlHostGroupConfig.mergeConfigs(configs);
        return configObject;
      case Kind.ROLEMAPPING:
        configObject.roleMapping = RoleMapping.mergeConfigs(configs);
        return configObject;
      case Kind.COLLECTION:
      default:
        return null;
    }
  }

  static mergeLabels(configs: ConfigObject[]): any {
    const configObject = new ConfigObject();
    const label = configs.reduce((acc: ConfigObject, curr: ConfigObject) => {
      configObject.meta.labelList = intersectLabel(acc.meta.labelList, curr.meta.labelList);
      return configObject;
    });
    return configObject.meta.labelList;
  }

  static toProto(configObject: ConfigObject): ConfigObjectProto {

    const proto = new ConfigObjectProto();
    proto.setApiversion('v1');
    proto.setId(configObject.id);
    proto.setMeta(Meta.toProto(configObject.meta));
    proto.setKind(configObject.kind.valueOf());

    if (configObject.crawlEntity) {
      proto.setCrawlEntity(CrawlEntity.toProto(configObject.crawlEntity));

    } else if (configObject.seed) {
      proto.setSeed(Seed.toProto(configObject.seed));

    } else if (configObject.crawlJob) {
      proto.setCrawlJob(CrawlJob.toProto(configObject.crawlJob));

    } else if (configObject.crawlConfig) {
      proto.setCrawlConfig(CrawlConfig.toProto(configObject.crawlConfig));

    } else if (configObject.crawlScheduleConfig) {
      proto.setCrawlScheduleConfig(CrawlScheduleConfig.toProto(configObject.crawlScheduleConfig));

    } else if (configObject.browserConfig) {
      proto.setBrowserConfig(BrowserConfig.toProto(configObject.browserConfig));

    } else if (configObject.politenessConfig) {
      proto.setPolitenessConfig(PolitenessConfig.toProto(configObject.politenessConfig));

    } else if (configObject.browserScript) {
      proto.setBrowserScript(BrowserScript.toProto(configObject.browserScript));

    } else if (configObject.crawlHostGroupConfig) {
      proto.setCrawlHostGroupConfig(CrawlHostGroupConfig.toProto(configObject.crawlHostGroupConfig));

    } else if (configObject.roleMapping) {
      proto.setRoleMapping(RoleMapping.toProto(configObject.roleMapping));

    } else if (configObject.collection) {
      proto.setCollection(Collection.toProto(configObject.collection));
    }

    return proto;
  }

  static createUpdateRequest(configUpdate: ConfigObject, mergedConfigs: ConfigObject, formControl: any, options: any):
    { updateTemplate: ConfigObject, pathList: string[] } {
    const updateTemplate = new ConfigObject();
    updateTemplate.kind = configUpdate.kind;
    const pathList = [];

    Meta.createUpdateRequest(updateTemplate, pathList, configUpdate, mergedConfigs, options);

    switch (configUpdate.kind) {
      case Kind.UNDEFINED:
        break;
      case Kind.CRAWLENTITY:
        break;
      case Kind.SEED:
        break;
      case Kind.CRAWLJOB:
        CrawlJob.createUpdateRequest(updateTemplate, pathList, configUpdate, mergedConfigs, formControl);
        break;
      case Kind.CRAWLCONFIG:
        CrawlConfig.createUpdateRequest(updateTemplate, pathList, configUpdate, mergedConfigs, formControl);
        break;
      case Kind.CRAWLSCHEDULECONFIG:
        CrawlScheduleConfig.createUpdateRequest(updateTemplate, pathList, configUpdate, mergedConfigs, formControl);
        break;
      case Kind.BROWSERCONFIG:
        BrowserConfig.createUpdateRequest(updateTemplate, pathList, configUpdate, mergedConfigs, formControl, options);
        break;
      case Kind.POLITENESSCONFIG:
        PolitenessConfig.createUpdateRequest(updateTemplate, pathList, configUpdate, mergedConfigs, formControl, options);
        break;
      case Kind.BROWSERSCRIPT:
        BrowserScript.createUpdateRequest(updateTemplate, pathList, configUpdate, mergedConfigs, formControl);
        break;
      case Kind.CRAWLHOSTGROUPCONFIG:
        CrawlHostGroupConfig.createUpdateRequest(updateTemplate, pathList, configUpdate, mergedConfigs, formControl, options);
        break;
      case Kind.ROLEMAPPING:
        RoleMapping.createUpdateRequest(updateTemplate, pathList, configUpdate, mergedConfigs, formControl);
        break;
    }

    return {updateTemplate, pathList};
  }
}
