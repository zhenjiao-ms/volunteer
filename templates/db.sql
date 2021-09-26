DROP table events;
CREATE TABLE events
(
    GUID UNIQUEIDENTIFIER
        CONSTRAINT Guid_Default DEFAULT
        NEWSEQUENTIALID() ROWGUIDCOL,
    event_name VARCHAR(60) NOT NULL,
	event_desc VARCHAR(1024),
	required_volunteer int,
	created_by VARCHAR(60) NOT NULL INDEX i_createdby,
	created_at DATETIME,
    state SMALLINT,
    CONSTRAINT Guid_PK PRIMARY KEY (GUID)
);