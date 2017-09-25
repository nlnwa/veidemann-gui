import { Component, OnInit } from '@angular/core';
import { CrawlhostgroupconfigService} from '../crawlhostgroupconfig.service';
import {Crawlhostgroupconfig} from '../crawlhostgroupconfig';

@Component({
  selector: 'crawlhostgroupconfig-list',
  templateUrl: './crawlhostgroupconfig-list.component.html',
  styleUrls: ['./crawlhostgroupconfig-list.component.css']
})
export class CrawlhostgroupconfigListComponent implements OnInit {

  crawlhostgroupconfigs: Crawlhostgroupconfig[];
  selectedCrawlhostgroupconfig: Crawlhostgroupconfig;


  constructor(private crawlhostgroupconfigService: CrawlhostgroupconfigService) {
  }

  ngOnInit() {
    this.crawlhostgroupconfigService.getAllCrawlhostgroupconfig().subscribe(crawlhostgroupconfigs => {
      this.crawlhostgroupconfigs = crawlhostgroupconfigs.value;
    })
  }

  private getIndexOfCrawlhostgroupconfig = (crawlhostgroupconfigId: String) => {
    return this.crawlhostgroupconfigs.findIndex((crawlhostgroupconfig) => {
      return crawlhostgroupconfig.id === crawlhostgroupconfigId;
    });
  };

  selectCrawlhostgroupconfig(crawlhostgroupconfig: Crawlhostgroupconfig) {
    this.selectedCrawlhostgroupconfig = crawlhostgroupconfig;
  }

  createNewCrawlhostgroupconfig() {
    const crawlhostgroupconfig: Crawlhostgroupconfig = {
     ip_range: [],
      meta: {
        name: '',
        description: '',
        label: [],
      }
    };
    // By default, a newly-created  will have the selected state.
    this.selectCrawlhostgroupconfig(crawlhostgroupconfig);
  }

  deleteCrawlhostgroupconfig = (crawlhostgroupconfig: String) => {
    const idx = this.getIndexOfCrawlhostgroupconfig(crawlhostgroupconfig);
    if (idx !== -1) {
      this.crawlhostgroupconfigs.splice(idx, 1);
      this.selectCrawlhostgroupconfig(null);
    }
    return this.crawlhostgroupconfigs
  };

  addCrawlhostgroupconfig = (crawlhostgroupconfig: Crawlhostgroupconfig) => {
    this.crawlhostgroupconfigs.push(crawlhostgroupconfig);
    this.selectCrawlhostgroupconfig(crawlhostgroupconfig);
    return this.crawlhostgroupconfigs;
  };

  updateCrawlhostgroupconfig = (crawlhostgroupconfig: Crawlhostgroupconfig) => {
    const idx = this.getIndexOfCrawlhostgroupconfig(crawlhostgroupconfig.id);
    if (idx !== -1) {
      this.crawlhostgroupconfigs[idx] = crawlhostgroupconfig;
      this.selectCrawlhostgroupconfig(crawlhostgroupconfig);
    }
    return this.crawlhostgroupconfigs;
  }
}