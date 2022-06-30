import React from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetMatchByIdQuery } from "../../api/matchesApi";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

const MatchCard = () => {
  const { matchId } = useParams();
  const { data } = useGetMatchByIdQuery(matchId);
  return (
    <div>
      <div className="row">
        <div>
          <h5>
            {data?.homeTeamName} vs. {data?.awayTeamName}
          </h5>
          <h4>{data?.competition}</h4>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          🏆 <strong>Prize</strong>
        </div>
        <div className="col-sm-9">
          <Form.Control className="form-control" placeholder="Enter title..." />
          <br />
          <Form.Control
            className="form-control"
            placeholder="Enter description..."
          />
          <br />
          <Button className="float-end">Save</Button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>Blog Posts</strong>
        </div>
        <div className="col-sm-9">
          <Form.Control className="form-control" />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>Kickoff</strong>
        </div>
        <div className="col-sm-9">
          <div>{data?.scheduledStart}</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>MatchId</strong>
        </div>
        <div className="col-sm-9">
          <div>{data?.matchId}</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Score Calculated <sup>F24</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div></div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Score <sup>F1</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div></div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Score First Half <sup>F1</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div></div>
        </div>
      </div>
      <hr />
      <h4 className="mt-5">Documents</h4>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Score First Half <sup>F1</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          {/* TODO: add document hadler */}
          <div className="d-flex align-items-center">
            <ArrowSmRightIcon width={25} /> {data?.f1DocumentName}
          </div>
          <small>
            <div>
              <strong>Created</strong>
              <div>{data?.f1DocumentCreated}</div>
            </div>
            <div>
              <strong>Received</strong>
              <div>{data?.f1DocumentCreated}</div>
            </div>
            <div>
              <strong>Processed</strong>
              <div>{data?.f1DocumentCreated}</div>
            </div>
          </small>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>Latest F24</strong>
        </div>
        <div className="col-sm-9">
          <Button variant="danger" className="float-end" size="sm">
            Reimport F24
          </Button>
        </div>
      </div>
      <hr />
      <h4 className="mt-5">{data?.awayTeamName}</h4>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Stories <sup>F1</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div className="d-flex align-items-center">
            <ArrowSmRightIcon width={25} /> View stories
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Formation <sup>F24</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div></div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Players <sup>F24</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div>
            <strong>Currently playing</strong>
            <br />
            <strong>Currently on the bench</strong>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Captain <sup>F24</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div></div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Kit <sup>F24</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div></div>
        </div>
      </div>
      <hr />
      <h4 className="mt-5">General Information</h4>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Accuracy <sup>F1</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div>{data?.accuracy}</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            City <sup>F1</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div>{data?.city}</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Coverage <sup>F1</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div>{data?.coverage}</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Match day <sup>F1</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div>{data?.day}</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Period <sup>F1</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div>{data?.period}</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Period 1 Start <sup>F1</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div>{data?.period1Start}</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Period 2 Start <sup>F1</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div>{data?.period2Start}</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Round <sup>F1</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div>{data?.round}</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Season <sup>F1/F24</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div>{data?.season}</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Timing <sup>F1</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div>{data?.timing}</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Type <sup>F1</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div>{data?.type}</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <strong>
            Venue <sup>F1</sup>
          </strong>
        </div>
        <div className="col-sm-9">
          <div>{data?.venue}</div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
