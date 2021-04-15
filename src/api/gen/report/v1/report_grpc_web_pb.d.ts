import * as grpcWeb from 'grpc-web';

import * as frontier_v1_resources_pb from '../../frontier/v1/resources_pb';
import * as log_v1_resources_pb from '../../log/v1/resources_pb';
import * as report_v1_report_pb from '../../report/v1/report_pb';


export class ReportClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listCrawlLogs(
    request: report_v1_report_pb.CrawlLogListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<log_v1_resources_pb.CrawlLog>;

  listPageLogs(
    request: report_v1_report_pb.PageLogListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<log_v1_resources_pb.PageLog>;

  executeDbQuery(
    request: report_v1_report_pb.ExecuteDbQueryRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<report_v1_report_pb.ExecuteDbQueryReply>;

  listExecutions(
    request: report_v1_report_pb.CrawlExecutionsListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<frontier_v1_resources_pb.CrawlExecutionStatus>;

  listJobExecutions(
    request: report_v1_report_pb.JobExecutionsListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<frontier_v1_resources_pb.JobExecutionStatus>;

}

export class ReportPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listCrawlLogs(
    request: report_v1_report_pb.CrawlLogListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<log_v1_resources_pb.CrawlLog>;

  listPageLogs(
    request: report_v1_report_pb.PageLogListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<log_v1_resources_pb.PageLog>;

  executeDbQuery(
    request: report_v1_report_pb.ExecuteDbQueryRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<report_v1_report_pb.ExecuteDbQueryReply>;

  listExecutions(
    request: report_v1_report_pb.CrawlExecutionsListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<frontier_v1_resources_pb.CrawlExecutionStatus>;

  listJobExecutions(
    request: report_v1_report_pb.JobExecutionsListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<frontier_v1_resources_pb.JobExecutionStatus>;

}

