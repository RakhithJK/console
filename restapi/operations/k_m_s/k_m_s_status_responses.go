// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package k_m_s

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// KMSStatusOKCode is the HTTP code returned for type KMSStatusOK
const KMSStatusOKCode int = 200

/*
KMSStatusOK A successful response.

swagger:response kMSStatusOK
*/
type KMSStatusOK struct {

	/*
	  In: Body
	*/
	Payload *models.KmsStatusResponse `json:"body,omitempty"`
}

// NewKMSStatusOK creates KMSStatusOK with default headers values
func NewKMSStatusOK() *KMSStatusOK {

	return &KMSStatusOK{}
}

// WithPayload adds the payload to the k m s status o k response
func (o *KMSStatusOK) WithPayload(payload *models.KmsStatusResponse) *KMSStatusOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the k m s status o k response
func (o *KMSStatusOK) SetPayload(payload *models.KmsStatusResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *KMSStatusOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*
KMSStatusDefault Generic error response.

swagger:response kMSStatusDefault
*/
type KMSStatusDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewKMSStatusDefault creates KMSStatusDefault with default headers values
func NewKMSStatusDefault(code int) *KMSStatusDefault {
	if code <= 0 {
		code = 500
	}

	return &KMSStatusDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the k m s status default response
func (o *KMSStatusDefault) WithStatusCode(code int) *KMSStatusDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the k m s status default response
func (o *KMSStatusDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the k m s status default response
func (o *KMSStatusDefault) WithPayload(payload *models.Error) *KMSStatusDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the k m s status default response
func (o *KMSStatusDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *KMSStatusDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
