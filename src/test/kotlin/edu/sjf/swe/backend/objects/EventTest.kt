package edu.sjf.swe.backend.objects

import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*

internal class EventTest {

    @Test
    fun isOver() {
        val event = Event(0, 0, System.currentTimeMillis(), System.currentTimeMillis() * 2, "", "")
        assertFalse(event.isOver())
    }

    @Test
    fun testEquals() {
        val event1 = Event(0, 0, System.currentTimeMillis(), System.currentTimeMillis() * 2, "", "")
        val event2 = Event(0, 0, System.currentTimeMillis(), System.currentTimeMillis() * 2, "", "")
        assertTrue(event1 == event2)

        val event3 = Event(1, 0, System.currentTimeMillis(), System.currentTimeMillis() *1, "", "")
        assertFalse(event1 == event3)
        assertFalse(event2 == event3)
    }

    @Test
    fun isEmpty() {
        val event1 = Event(0, 0,0, 0, "", "")
        assertFalse(event1.isEmpty())
        val event2 = Event(-1, 0,0, 0, "", "")
        assertTrue(event2.isEmpty())
    }

}