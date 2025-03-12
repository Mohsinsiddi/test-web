import { gql } from '@apollo/client'

// queries ----------------------------------------------------

// get hub list
export const GET_HUB_LIST_ACTION = gql`
  query ListHub($sort: SortingKey, $search: String) {
    listHub(sort: $sort, search: $search) {
      data {
        hubCategory
        hubLevel
        hubName
        createdByName
        createdAt
        address {
          addressLine1
          addressLine2
          country
          city
          state
          zipCode
        }
        id
        hubId
        operationalHours {
          startTime
          endTime
        }
        timeZone
        shipmentSupported
        attachments {
          id
          name
          type
          url
          desc
        }
      }
      message
    }
  }
`

// get hub details
export const GET_HUB_DETAILS_ACTION = gql`
  query GetHubDetails($input: DetailsInput!) {
    getHubDetails(input: $input) {
      data {
        id
        hubCategory
        hubLevel
        hubName
        address {
          addressLine1
          addressLine2
          country
          city
          state
          zipCode
        }
        hubId
        operationalHours {
          startTime
          endTime
        }
        createdByName
        totalSubHub
        totalVehicle
        totalDriver
        timeZone
        shipmentSupported
        attachments {
          id
          name
          type
          url
          desc
        }
        createdAt
        hubLeadDetails {
          id
          email
          password
          name
          phoneNumber
          idDocuments {
            id
            name
            type
            url
            desc
          }
          address {
            addressLine1
            addressLine2
            country
            city
            state
            zipCode
          }
        }
        mainHubName
      }
      message
    }
  }
`

// get sub hub list
export const GET_SUBHUB_LIST_ACTION = gql`
  query ListSubHubs($input: HubIdInput!, $search: String, $sort: SortingKey) {
    listSubHubs(input: $input, search: $search, sort: $sort) {
      data {
        id
        hubCategory
        hubLevel
        hubName
        createdByName
        address {
          addressLine1
          addressLine2
          country
          city
          state
          zipCode
        }
        hubId
        operationalHours {
          startTime
          endTime
        }
        timeZone
        shipmentSupported
        attachments {
          id
          name
          type
          url
          desc
        }
        createdAt
        mainHubName
      }
      message
    }
  }
`

// mutations --------------------------------------------------

// create hub
export const CREATE_HUB_ACTION = gql`
  mutation CreateHub($input: CreateHubInput!) {
    createHub(input: $input) {
      success
      message
      errors
    }
  }
`

// delete hub
export const DELETE_HUB_ACTION = gql`
  mutation DeleteHub($input: DeleteHubInput!) {
    deleteHub(input: $input) {
      success
      message
      errors
    }
  }
`

// update hub
export const UPDATE_HUB_ACTION = gql`
  mutation UpdateHub($input: UpdateHubInput!) {
    updateHub(input: $input) {
      success
      message
      errors
    }
  }
`

// update sub lead details of hub
export const UPDATE_LEAD_DETAILS_ACTION = gql`
  mutation UpdateLeadDetails($input: UpdateHubLeadDetailsInput!) {
    updateLeadDetails(input: $input) {
      success
      message
      errors
    }
  }
`
export const GET_HUB_ORDERS_LIST = gql`
 query listHubOrders($input: listHubOrderInput!, $search: String, $sort: SortingKey) {
  listHubOrders(input: $input, search: $search, sort: $sort) {
    data {
      id
      item {
        id
        name
        HSNCode
        image
        extraImage {
          url
          description
        }
        price
        unit
        quantity
      }
      transxOrderId
      createdAt
      transXOrderType
      orderStatus
      deliveryAddress {
        addressLine1
        addressLine2
        city
        country
        latitude
        longitude
        postalCode
        state
        phone
        pincode
        assignedDriverId
        assignedDriverName
        assignedVehicleNumber
        assignedVehicleType
        assignedVehicleId
        assignedHubId
        assignedSubHubId
      }
      pickupAddress {
        addressLine1
        addressLine2
        city
        country
        latitude
        longitude
        postalCode
        state
        phone
        pincode
        assignedDriverId
        assignedDriverName
        assignedVehicleNumber
        assignedVehicleType
        assignedVehicleId
        assignedHubId
        assignedSubHubId
      }
    }
    message
    success
  }
}

`